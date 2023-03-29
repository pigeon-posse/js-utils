#!/bin/bash

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

for entry in "$SCRIPT_DIR"/compose/*
do

	ENTRY_CUT=$( sed 's#.*/\([^:]*\).*#\1#' <<<$entry | sed s/".yml"//)
	
	echo "$ENTRY_CUT"

done