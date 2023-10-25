import { TextField } from '@mui/material'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Stack from '@mui/material/Stack'

const EducationForm = ({ educationInfo, onChange }) => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>Education</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Stack spacing={2}>
          <TextField
            value={educationInfo.universityName}
            id='outlined-basic'
            label='University'
            variant='outlined'
            data-key='universityName'
            onChange={onChange}
          />
          <TextField
            value={educationInfo.degree}
            id='outlined-basic'
            label='Degree'
            variant='outlined'
            data-key='degree'
            onChange={onChange}
          />
          <Stack direction='row' spacing={1}>
            <TextField
              value={educationInfo.startDate}
              id='outlined-basic'
              label='Start Date'
              variant='outlined'
              data-key='startDate'
              onChange={onChange}
            />
            <TextField
              value={educationInfo.endDate}
              id='outlined-basic'
              label='End Date'
              variant='outlined'
              data-key='startDate'
              onChange={onChange}
            />
          </Stack>

          <TextField
            value={educationInfo.location}
            id='outlined-basic'
            label='Location'
            variant='outlined'
            onChange={onChange}
          />
        </Stack>
      </AccordionDetails>
    </Accordion>
  )
}

export default EducationForm
