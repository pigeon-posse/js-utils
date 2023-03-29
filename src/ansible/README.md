<!--

██████╗ ██╗ ██████╗ ███████╗ ██████╗ ███╗   ██╗                
██╔══██╗██║██╔════╝ ██╔════╝██╔═══██╗████╗  ██║                
██████╔╝██║██║  ███╗█████╗  ██║   ██║██╔██╗ ██║                
██╔═══╝ ██║██║   ██║██╔══╝  ██║   ██║██║╚██╗██║                
██║     ██║╚██████╔╝███████╗╚██████╔╝██║ ╚████║                
╚═╝     ╚═╝ ╚═════╝ ╚══════╝ ╚═════╝ ╚═╝  ╚═══╝                
                                                               
██████╗  ██████╗ ███████╗███████╗███████╗                      
██╔══██╗██╔═══██╗██╔════╝██╔════╝██╔════╝                      
██████╔╝██║   ██║███████╗███████╗█████╗                        
██╔═══╝ ██║   ██║╚════██║╚════██║██╔══╝                        
██║     ╚██████╔╝███████║███████║███████╗                      
╚═╝      ╚═════╝ ╚══════╝╚══════╝╚══════╝                      

█████╗█████╗█████╗█████╗█████╗█████╗█████╗█████╗               
╚════╝╚════╝╚════╝╚════╝╚════╝╚════╝╚════╝╚════╝      

 █████╗ ███╗   ██╗███████╗██╗██████╗ ██╗     ███████╗
██╔══██╗████╗  ██║██╔════╝██║██╔══██╗██║     ██╔════╝
███████║██╔██╗ ██║███████╗██║██████╔╝██║     █████╗  
██╔══██║██║╚██╗██║╚════██║██║██╔══██╗██║     ██╔══╝  
██║  ██║██║ ╚████║███████║██║██████╔╝███████╗███████╗
╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝╚═╝╚═════╝ ╚══════╝╚══════╝
                                                     

CREATED BY ANGELO
FOR PIGEONPOSSE.COM

-->

# INFORMATION ABOUT ANSIBLE USAGE

Ansible is used to work on multiple servers quickly. We have some playbooks here to work faster and have a more agile work environment.

INDEX 
- [Prerequisites](#-prerequisites)
- [Execution](#-execution)
- [Playbooks](#-playbooks)

## 🗝 Prerequisites

2. Unix system
1. Install ```ansible```. [Docs](https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html).

### 2. Environment files

To run the playbooks you must remove the word "test" from the environment files.

- ```test.hosts.yml``` to ```hosts.yml```
- ```test.variables.yml``` to ```variables.yml```
- ```docker/compose/.test.env``` to ```docker/compose/.env```
- ```docker/compose/.test.ff3.env``` to ```docker/compose/.test.ff3.env```

#### Fast way to change test files to production files

```bash
# Change test files to production files
sh exec.sh test-to-prod
# or add new prodution files witouth remove test files
sh exec.sh test-to-prod create-files
```

## 🏃 Execution

To run the ansible playbooks we can do it in the default ansible way ```ansible-playbook```, but if we want to go faster and not write so much we can run the file ```exec.sh```. In each section we will show an example of both ways, but now we will show you how the```exec.sh``` file works.

#### Examples of  ```exec.sh```

> All examples are running the playbook test of this project.

#### Main

Run plabooks by default.

```bash
#  default
ansible-playbook test/main.yml -v

# exec file 
sh exec.sh main test
```

#### Host limited

Run plabooks with extra-vars.

```bash
#  default
ansible-playbook test/main.yml -l "hostgroup1,hostgroup2" -v

# exec file 
sh exec.sh limited test hostgroup1,hostgroup2
```

#### With extra vars

Run plabooks with extra-vars.

```bash
#  default
ansible-playbook test/main.yml -e "key1=value1,key2=value2" -v

# exec file 
sh exec.sh extra-vars test key1=value1,key2=value2
```

#### Homeserver setup

Special execution for setup a homesever fast with multple apps.

```bash
sh exec.sh homeserver-setup
```

## 📂 PLAYBOOKS

Playbooks list
- [Test](#test)
- [Update](#update)
- [Packages](#Packages)
- [Aliases](#Aliases)
- [Users](#Users)
- [Docker](#Docker)
- [Cloudflare](#Cloudflare)
- [Nginx proxy manager](#Nginx-proxy-manager)


### TEST

Test connection with ping/pong & Execute echo for "Hello world" in each server.

#### Examples

```bash
sh exec.sh main test

# OR 

ansible-playbook test/main.yml -v
```

### UPDATE

Update all your servers quickly

```bash
sh exec.sh update

# OR 

ansible-playbook update/main.yml -v
```

### PACKAGES

Install packages to your servers

```bash
sh exec.sh packages

# OR 

ansible-playbook packages/main.yml -v
```

### ALIASES

Add a list of default aliases and a ```.bash_aliases``` file to add your personal aliases to all your servers and users you have listed in the ```variables.yml``` file.

#### Examples

```bash
sh exec.sh aliases

# OR 

ansible-playbook aliases/main.yml -v
```

### USERS

Add users and groups in servers fast ⚡️.

```bash
sh exec.sh users

# OR 

ansible-playbook users/main.yml -v
```

### DOCKER

This section contains content for docker and docker compose, from installation, deploying apps or changing the path of docker itself.

- [Install docker](#install-docker)
- [Change Docker root](#change-docker-root)
- [Compose up && Compose down](#compose-up-&&-compose-down)
- [Docker run](#docker-run)

#### Install docker

Do a docker & docker compose installation on all your servers.

> ⚠️ Requires: Change the variables of section ```docker installation``` in the file ```ansible/variables.yml```

##### Example

```bash
sh exec.sh main docker install-docker

# OR 

ansible-playbook docker/install-docker.yml -v
```

#### Change Docker root

Change docker root directory on all your servers fast.
Use example: You want to store the containers and images on an external hard drive or in a different directory.

> ⚠️ Requires: Change the variables of section ```docker``` in the file ```ansible/variables.yml```

##### Example

```bash
sh exec.sh main docker change-docker-root
# Limited to ansible host groups 
sh exec.sh limited docker change-docker-root hostgroup1,hostgroup2

# OR 

ansible-playbook docker/change-docker-root.yml -v
# Limited to ansible host groups 
ansible-playbook docker/change-docker-root.yml -l "hostgroup1,hostgroup2" -v
```


#### Compose up && Compose down

Up or down docker compose files. 

You have a list of docker-compose files made in the ```ansible/docker/compose``` directory.
You can list them with the ```sh exec.sh main compose-list``` command.

> ⚠️ Requires: change the variables of the  ```.env ``` & ```ff3.env ``` files of ```ansible/docker/compose``` directory.

##### Examples

###### Up

```bash
# Example with n8n

sh exec.sh main docker compose-up n8n

# OR 

ansible-playbook docker/compose-up.yml -e "file_name=n8n" -v
```

###### Down

```bash
# Example with n8n

sh exec.sh main docker compose-down n8n

# OR 

ansible-playbook docker/compose-down.yml -e "file_name=n8n" -v
```

#### Docker run

Run docker containers listed in ```ansible/docker/run/dockerfunc.sh```. This file is based in [dockerfunc](https://github.com/jessfraz/dotfiles/blob/master/.dockerfunc).
how many apps are in the file? You can list them with the command ```sh exec.sh main docker run-list```

##### Examples

###### List docker apps

```bash
sh exec.sh main docker run-list
```

###### Run

```bash
# Example with terraform

sh exec.sh main docker run terraform

# OR 

ansible-playbook docker/run.yml -e "container_name=terraform" -v
```


### CLOUDFLARE

Set cloudflare dns.

> ⚠️ Required change data 'cloudflare' in ```variables.yml```

```bash
sh exec.sh main cloudflare

# OR 

ansible-playbook cloudflare/main.yml -v
```

### HOMEPAGE

Add default content in your homepage (https://gethomepage.dev/) 

> ⚠️ Required change data 'homepage' in ```variables.yml```

```bash
sh exec.sh main homepage

# OR 

ansible-playbook homepage/main.yml -v
```

### NGINX PROXY MANAGER

Add default config in your Nginx proxy manager using rest api

> ⚠️ Required change data 'nginx-pm' in ```variables.yml```

```bash
sh exec.sh main nginx-pm

# OR 

ansible-playbook nginx-pm/main.yml -v
```
