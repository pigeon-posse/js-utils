#!/bin/bash

###############################################################################
# SIMPLE EXECUTE OF ANSIBLE-PLAYBOOK
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
	   		
	   		ansible-playbook ${SCRIPT_DIR}${FOLDER_NAME}/${FILE}.yml -e "file_name=${COMPOSE_FILE}" -v
	   	
	   	elif [ ${FILE} == "compose-list" ] || [ ${FILE} == "run-list" ]; then 

	   		bash ${SCRIPT_DIR}${FOLDER_NAME}/${FILE}.sh
	   	
	   	elif [ ${FILE} == "run" ]; then 
		   		
		   	ansible-playbook ${SCRIPT_DIR}${FOLDER_NAME}/${FILE}.yml -e "container_name=$4" -v
		
		else   	

	   		ansible-playbook ${SCRIPT_DIR}${FOLDER_NAME}/${FILE}.yml -v
	   		
	   	fi
   
	fi

else

  	ansible-playbook ${SCRIPT_DIR}${FOLDER_NAME}/main.yml -v

fi


###############################################################################