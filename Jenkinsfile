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
   steps {
            sh 'docker build . -t admin-test'
}
        }

        stage('Push image to container registry'){
   steps {
            sh('docker login ${CONTAINER_REGISTRY_SERVER} -u ${CONTAINER_REGISTRY_USERNAME} -p ${CONTAINER_REGISTRY_PASSWORD}')
            sh('docker push admin-test')
}
       }
       stage('Kubernetes Setup'){
   steps {
            sh("kubectl create -f app-deployment.yml -v=8")
}
        }
    }
}

