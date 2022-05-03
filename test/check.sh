#!/bin/bash
pwd
ls -ltrha
cd test
ls -ltra
chmod +x check.sh
sh check.sh
curl $(curl -I https://api.travis-ci.org/jobs/${TRAVIS_JOB_ID}/log.txt?deansi=true | perl -n -e '/^location: (.*)$/ && print "$1\n"')
