
node {

withMaven(maven:'maven') {

stage('Checkout') {
git url: 'https://github.com/piomin/sample-spring-microservices.git', credentialsId: 'github-piomin', branch: 'master'
}

stage('Build') {
sh 'mvn clean install'

def pom = readMavenPom file:'pom.xml'
print pom.version
env.version = pom.version
}


}

}
