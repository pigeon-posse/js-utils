#!/bin/bash

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
FILE="$SCRIPT_DIR"/run/.dockerfunc.sh

bash "$FILE" list-of-apps