import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Tooltip from '@mui/material/Tooltip';

const MasonryImageList = (props) => {
  const data = props.data;
  const groups = props.groups==null ? 3 : props.groups;
  return (
    <div style={{ width: "90%" }}>
    <Box>
      <ImageList variant="masonry" cols={groups}>
        {data.map((item) => (
          <Tooltip title={<span dangerouslySetInnerHTML={{ __html: item.desc }} />} key={item.img}>
            <ImageListItem>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          </Tooltip>
        ))}
      </ImageList>
    </Box>
     </div>
  );
}

export default MasonryImageList
