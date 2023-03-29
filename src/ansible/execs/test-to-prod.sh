#!/bin/bash

###############################################################################
# SIMPLE EXECUTE OF ANSIBLE-PLAYBOOK
###############################################################################


SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd | sed s/"execs"//)

HOSTS=hosts.yml
VARIABLES=variables.yml
DOCKER_ENV=docker/compose/.env
DOCKER_ff3_ENV=docker/compose/.ff3.env

TEST_HOSTS=test.hosts.yml
TEST_VARIABLES=test.variables.yml
TEST_DOCKER_ENV=docker/compose/.test.env
TEST_DOCKER_ff3_ENV=docker/compose/.test.ff3.env

echo ''
echo "dir: $SCRIPT_DIR"
echo ''

if [[ "$2" == "create-files" ]]; then

	echo "Create ${SCRIPT_DIR}${VARIABLES} file."
	touch "${SCRIPT_DIR}${VARIABLES}"
	echo ''

	echo "Create ${SCRIPT_DIR}${HOSTS} file."
	touch "${SCRIPT_DIR}${HOSTS}"
	echo ''

	echo "Create ${SCRIPT_DIR}${DOCKER_ENV} file."
	touch "${SCRIPT_DIR}${DOCKER_ENV}"
	echo ''

	echo "Create ${SCRIPT_DIR}${DOCKER_ff3_ENV} file."
	touch "${SCRIPT_DIR}${DOCKER_ff3_ENV}"
	echo ''

else 

	echo "Change ${SCRIPT_DIR}${TEST_VARIABLES} file."
	mv "${SCRIPT_DIR}${TEST_VARIABLES}" "${SCRIPT_DIR}${VARIABLES}"
	echo ''

	echo "Change ${SCRIPT_DIR}${TEST_HOSTS} file."
	mv "${SCRIPT_DIR}${TEST_HOSTS}" "${SCRIPT_DIR}${HOSTS}"
	echo ''

	echo "Change ${SCRIPT_DIR}${TEST_DOCKER_ENV} file."
	mv "${SCRIPT_DIR}${TEST_DOCKER_ENV}" "${SCRIPT_DIR}${DOCKER_ENV}"
	echo ''

	echo "Change ${SCRIPT_DIR}${TEST_DOCKER_ff3_ENV} file."
	mv "${SCRIPT_DIR}${TEST_DOCKER_ff3_ENV}" "${SCRIPT_DIR}${DOCKER_ff3_ENV}"
	echo ''

fi

###############################################################################