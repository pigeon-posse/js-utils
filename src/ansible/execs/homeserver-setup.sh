#!/bin/bash

###############################################################################
# EXECUTE ALL DOCKER CONTAINERS
###############################################################################

getData(){

	grep $1 docker/compose/.env | cut -f2- -d=
}

sh exec.sh main update

sh exec.sh main cloudflare

sh exec.sh main docker compose-up cloudflare 	# ✅
sh exec.sh main docker compose-up networks 	  	# ✅
sh exec.sh main docker compose-up wireguard    	# ✅
sh exec.sh main docker compose-up vaultwarden   # ✅
sh exec.sh main docker compose-up nginx-pm     	# ✅
sh exec.sh main docker compose-up pma          	# ✅

sh exec.sh main docker compose-up portainer    	# ✅
sh exec.sh main docker compose-up filebrowser  	# ✅
sh exec.sh main docker compose-up homepage     	# ✅

sh exec.sh main docker compose-up papermerge   	# ✅
sh exec.sh main docker compose-up nextcloud     # ✅
sh exec.sh main docker compose-up firefly       # ✅


echo "
Default values for your host:

{
  wireguard : {
    port: $(getData 'WGUI_PORT'),
    user: $(getData 'WGUI_USERNAME'),
    pass: $(getData 'WGUI_PASS')
  },
  vaultwarden : {
    port: $(getData 'VAULTWARDEN_PORT'),
    user: ''
    pass: ''
  },
  nginx-pm : {
    port: $(getData 'NGINX_PORT'),
    user: admin@example.com,
    pass: changeme
  },
  phpmyadmin : {
    port: $(getData 'PMA_PORT'),
    user: '',
    pass: ''
  },
  portainer : {
    port: $(getData 'PORTAINER_PORT'),
    user: '',
    pass: ''
  },
  filebrowser : {
    port: $(getData 'FILEBROWSER_PORT'),
    user: 'admin',
    pass: 'admin'
  },
  homepage : {
    port: $(getData 'HOMEPAGE_PORT'),
    user: '',
    pass: ''
  },
  firefly : {
    port: $(getData 'FF3_PORT'),
    user: '',
    pass: ''
  },
  papermerge : {
    port: $(getData 'PAPERMERGE_PORT'),
    user: 'admin',
    pass: 'admin'
  },
  nextcloud: {
    port: $(getData 'NEXTCLOUD_PORT'),
    user: '',
    pass: ''
  },
  fireflyiii: {
    port: $(getData 'FF3_PORT'),
    user: '',
    pass: ''
  },
}"

###############################################################################