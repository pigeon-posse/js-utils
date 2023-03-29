#!/bin/bash

###############################################################################
# ANSIBLE-PLAYBOOK EXECUTE IN SPECIFIC HOST
###############################################################################

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd | sed s/"execs"//)

echo ''
echo "dir: $SCRIPT_DIR"
echo ''

FOLDER_NAME=$2

if [ ${FOLDER_NAME} == "docker" ]; then
   
   	FILE=$3

	if [ -n "${FILE}" ]; then 
   		
   		if [ ${FILE} == "compose-up" ] || [ ${FILE} == "compose-down" ]; then 
	   		
	   		COMPOSE_FILE=$4
	   		ENV=$5
	   		
	   		ansible-playbook ${SCRIPT_DIR}${FOLDER_NAME}/${FILE}.yml -e "file_name=${COMPOSE_FILE},${ENV}" -v 
	   	
	   	else
	   		
	   		ENV=$4

	   		ansible-playbook ${SCRIPT_DIR}${FOLDER_NAME}/${FILE}.yml -e "${ENV}" -v
	   	
	   	fi
   
	fi

else

   	ENV=$3

  	ansible-playbook ${SCRIPT_DIR}${FOLDER_NAME}/main.yml -e "${ENV}" -v

fi


###############################################################################