const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'https://sonarcloud.io',
       options : {
	    'sonar.projectDescription': 'This is a Node JS application',
	    'sonar.projectName': 'Node JS Application - Sample',
	    'sonar.projectKey':'NodeJsMithunTechnologies',
	    //'sonar.projectKey':'kirtz',   
	    'sonar.login': 'a21617959c9ae081f1369018d01db4e484b07950',
	    //'sonar.login': 'KeerthanaGopalakrishna',
	    //'sonar.password': 'Teddy@1997',
            'sonar.projectVersion':'1.0',
	    'sonar.language':'js',
            'sonar.sourceEncoding':'UTF-8',
            'sonar.sources': '.',
	  //'sonar.tests': 'specs',
          //'sonar.inclusions' : 'src/**'
       },
}, () => {});
