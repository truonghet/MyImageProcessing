# Getting Started
### Setup Environment
- download and install nodejs: [v18.18.1](https://nodejs.org/en/blog/release/v18.18.1)
- pull project: https://github.com/truonghet/MyImageProcessing.git
- cd to the root of project
- run the command: `npm install`
### Run the project at local
- the api port: `8082`
- build project: `npm run build`
- start project: `npm run dev`
### Image:
- Image: https://github.com/truonghet/MyImageProcessing/blob/main/img.png?raw=true
- Before:
  
  ![image](https://github.com/truonghet/MyImageProcessing/assets/9692983/9f156746-dfdb-421a-ad3f-732a03d403cd)

- After:
  
  ![image](https://github.com/truonghet/MyImageProcessing/assets/9692983/6a2c9215-1e68-48fd-abbf-b4f4348cd209)

### Endpoint:
- Localhost: http://localhost:8082/filteredimage?image_url=https://github.com/truonghet/MyImageProcessing/blob/main/img.png?raw=true
- Live http://my-image-processing-dev2.us-east-1.elasticbeanstalk.com/filteredimage?image_url=https://github.com/truonghet/MyImageProcessing/blob/main/img.png?raw=true

### Error handling
- If image url is empty and invalid:
  
  ![image](https://github.com/truonghet/MyImageProcessing/assets/9692983/de0165ef-84bb-4f0a-a216-700f2557ada0)

  ![image](https://github.com/truonghet/MyImageProcessing/assets/9692983/1dd3cfd5-9c84-4608-b5bc-c7569ee7abff)

  ![image](https://github.com/truonghet/MyImageProcessing/assets/9692983/e25b2421-4a40-4b30-ab27-cc3d19381bc1)

# Deploying applications to Elastic Beanstalk environments
### Setup AWS CLI, EB CLI at your local machine
- Open PowerShell and run `aws configure` to setup credential information of aws account
- Open PowerShell and run `eb init`, `eb create`

![image](https://github.com/truonghet/MyImageProcessing/assets/9692983/d56dda65-6e97-40f6-bc2b-618a5249cdb2)
![image](https://github.com/truonghet/MyImageProcessing/assets/9692983/30cef61a-1acb-4c8a-8805-175b83551c28)

# Application on EB AWS

![image](https://github.com/truonghet/MyImageProcessing/assets/9692983/d4db3d40-96b2-4b31-8d9f-9cb3a1852b98)

![image](https://github.com/truonghet/MyImageProcessing/assets/9692983/089e6d20-c6a9-48da-858c-96b2a13f05e4)

![image](https://github.com/truonghet/MyImageProcessing/assets/9692983/9f185634-d90d-4b61-ba5b-c254c73ba844)





- 
