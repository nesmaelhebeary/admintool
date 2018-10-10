pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh """
			
				mvn clean install  -Dmaven.test.skip=true
				"""
                echo 'Building. Done.'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }

 stage('Build Docker Image'){
        try{
            DOCKER_IMAGE_NAME="docker image name"
            sh 'docker build . -t ' + DOCKER_IMAGE_NAME
        } catch(e) {
            notify("Something failed building Docker Image")
            throw e;
        }
    }

       stage('Push image to container registry'){
        try{
            sh('docker login ${CONTAINER_REGISTRY_SERVER} -u ${CONTAINER_REGISTRY_USERNAME} -p ${CONTAINER_REGISTRY_PASSWORD}')
            sh('docker push ' + DOCKER_IMAGE_NAME)
        } catch(e) {
            notify("Something failed pushing Docker Image")
            throw e;
        }
    }
stage('Kubernetes Setup'){
        try{
            sh("kubectl create -f app-deployment.yml -v=8")
        } catch(e) {
            notify("Something failed Kubernetes Setup")
            throw e;
        }
    }
    }
}

