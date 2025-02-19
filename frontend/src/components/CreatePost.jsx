import { Box } from '@mui/material';
import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function CreatePost() {
  return (
    <div>
      <Box sx={{
              mt: 2,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly"
            }}>
              <Box sx={{
                  mt: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "left",
                  justifyContent: "space-between",
                  width:"50%",
                  textAlign:"left"
                      }}>
                <InputGroup size="lg">
                  <InputGroup.Text id="inputGroup-sizing-lg">Title</InputGroup.Text>
                  <Form.Control
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </InputGroup>
                <InputGroup >
                <InputGroup.Text>Details of the post</InputGroup.Text>
                  <Form.Control as="textarea" aria-label="With textarea" />
                </InputGroup>
              </Box>
              <Box sx={{
                mt: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between"
                  }}>RIGHT</Box>
            </Box>
      
      </div>
  )
}

export default CreatePost