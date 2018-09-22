pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh """
			
				mvn clean install
				"""
                echo 'Building. Done.'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}

