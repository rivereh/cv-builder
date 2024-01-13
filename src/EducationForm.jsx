import { TextField } from '@mui/material'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Stack from '@mui/material/Stack'
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker'
import { useState } from 'react'
import dayjs from 'dayjs'

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
            name='universityName'
            onChange={onChange}
          />
          <TextField
            value={educationInfo.degree}
            id='outlined-basic'
            label='Degree'
            variant='outlined'
            name='degree'
            onChange={onChange}
          />
          <Stack direction='row' spacing={1}>
            <MobileDatePicker
              label='Start Date'
              views={['year', 'month']}
              value={dayjs(educationInfo.startDate)}
              onChange={(newDate) => onChange(newDate, 'startDate')}
              format='MM-YYYY'
            />
            <MobileDatePicker
              label='End Date'
              views={['year', 'month']}
              value={dayjs(educationInfo.endDate)}
              onChange={(newDate) => onChange(newDate, 'endDate')}
              format='MM-YYYY'
            />
          </Stack>

          <TextField
            value={educationInfo.location}
            id='outlined-basic'
            label='Location'
            variant='outlined'
            name='location'
            onChange={onChange}
          />
        </Stack>
      </AccordionDetails>
    </Accordion>
  )
}

export default EducationForm
