import React from 'react'
import { Box } from '@mui/material'
<<<<<<< HEAD

const HorizontalScrollbar = ({data}) => {
=======
import BodyPart from './BodyPart'

const HorizontalScrollbar = ({data,bodyPart,setBodypart}) => {
>>>>>>> 77dfb2e (BodyPart component added with basic style)
  return (
    <div>
        {
        data.map((item)=>(
        <Box
            key={item.id || item}
            itemId={item.id || item}
            tital={item.id || item}
            m="0 40px"
            >
<<<<<<< HEAD
            {item}
=======
            <BodyPart item={item} bodyPart={bodyPart} setBodypart={setBodypart}/>
>>>>>>> 77dfb2e (BodyPart component added with basic style)
        </Box>))
        }
    </div>
  )
}

export default HorizontalScrollbar