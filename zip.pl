#!perl
# zip.pl for pandora-title-in-tab.  Copyright (c) 2019 Chris White.
# CC-BY-SA 3.0.

use Archive::Zip;
use File::Globstar qw(globstar);
use JSON::MaybeXS;
use Path::Class;

my $me = decode_json(file('manifest.json')->slurp);
die "Couldn't read manifest" unless ref $me eq 'HASH';
my $fn = "webstore-@{[$me->{version}]}.zip";
eval { file($fn)->remove() };       # ignore errors

my @files = grep { !/\.(zip|svg|pl)$/i && !/\bscreenshot/i } globstar '**/*';
die "No files found" unless @files;
print "Files for version @{[$me->{version}]}:\n", join("\n", @files), "\n";

my $zip = Archive::Zip->new();

$zip->addFileOrDirectory($_) foreach @files;
#foreach(@files) {
#    if(-d) {
#        $zip->addDirectory($_);
#    } else {
#        $zip->addFile($_);
#    }
#}

unless($zip->writeToFileNamed($fn) == AZ_OK) { 
    die "couldn't save: $!";
}



