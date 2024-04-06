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
- Image: https://raw.githubusercontent.com/truonghet/MyImageProcessing/main/img.png?token=GHSAT0AAAAAACQIKWGJ6GTUR26NGQ65TUPUZQMBAIA
- Before:
  
  ![image](https://github.com/truonghet/MyImageProcessing/assets/9692983/9f156746-dfdb-421a-ad3f-732a03d403cd)

- After:
  
  ![image](https://github.com/truonghet/MyImageProcessing/assets/9692983/6a2c9215-1e68-48fd-abbf-b4f4348cd209)

### Endpoint:
- http://localhost:8082/filteredimage?image_url=https://raw.githubusercontent.com/truonghet/MyImageProcessing/main/img.png

### Error handling
- If image url is empty and invalid:
  
  ![image](https://github.com/truonghet/MyImageProcessing/assets/9692983/de0165ef-84bb-4f0a-a216-700f2557ada0)

  ![image](https://github.com/truonghet/MyImageProcessing/assets/9692983/1dd3cfd5-9c84-4608-b5bc-c7569ee7abff)

  ![image](https://github.com/truonghet/MyImageProcessing/assets/9692983/e25b2421-4a40-4b30-ab27-cc3d19381bc1)

# Deploying applications to Elastic Beanstalk environments
### Setup AWS CLI, EB CLI at your local machine
- Open PowerShell and run `aws configure` to setup credential information of aws account
- Open PowerShell and run `eb init`

  ![image](https://github.com/truonghet/MyImageProcessing/assets/9692983/e96748fd-5ebe-4390-b10d-58589bda5efa)
  ![image](https://github.com/truonghet/MyImageProcessing/assets/9692983/e05e0f1c-ea95-4387-8b67-84b88df7fd80)
  ![image](https://github.com/truonghet/MyImageProcessing/assets/9692983/43fe3320-fae6-4ff3-87b0-acc4602c9b58)





- 
