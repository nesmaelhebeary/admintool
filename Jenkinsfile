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
sh """
cd ${WORKSPACE}/admintool/src/main/docker/
cp ${WORKSPACE}/admintool/target/admintool-0.0.1-SNAPSHOT.war .
            docker build -t admin .
"""
}
        }

     
       stage('Kubernetes Setup'){
   steps {

			
				
				sh " kubectl get namespaces"
			
		
      
 

        }
    }
}

}