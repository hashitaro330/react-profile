import React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'


const Skills: React.FC = () => {

  return (
    <>
      <Box p={2}>
        <Box display='flex' justifyContent='center' p={1} >
          <Typography variant='h5' >
            Skills
          </Typography>
        </Box>
        <Box display='flex' justifyContent='center' p={1} >
          <Card sx={{width: 730, maxWidth: "mx"}}>
            <CardContent>
              <Typography variant="h6">
                言語
              </Typography>
              <Typography color="textSecondary">
                Java / C++ / JavaScript / TypeScript
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box display='flex' justifyContent='center' p={1} >
          <Card sx={{width: 730, maxWidth: "mx"}}>
            <CardContent>
              <Typography variant="h6">
                フレームワーク
              </Typography>
              <Typography color="textSecondary">
                Spring / React
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box display='flex' justifyContent='center' p={1} >
          <Card sx={{width: 730, maxWidth: "mx"}}>
            <CardContent>
              <Typography variant="h6">
                データベース
              </Typography>
              <Typography color="textSecondary">
                MySQL / PostgreSQL
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box display='flex' justifyContent='center' p={1} >
          <Card sx={{width: 730, maxWidth: "mx"}}>
            <CardContent>
              <Typography variant="h6">
                AWS
              </Typography>
              <Typography color="textSecondary">
                EC2 / ECS / ECR / EKS / Lambda / SQS / SNS / S3  / CloudWatch / CloudFormation / RDS / Route53
              </Typography>
            </CardContent>
          </Card>
        </Box>

      </Box>
    </>
  );
}

export default Skills;
