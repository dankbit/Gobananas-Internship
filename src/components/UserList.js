import React from 'react';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';

const UserList = ({ data }) => {
  const colors = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500', 'bg-pink-500', 'bg-indigo-500'];

  return (
    <List>
      {data.map((item, index) => (
        <ListItem 
          key={item.id} 
          className="border-b border-gray-300 hover:bg-gray-200 transition duration-300"
          style={{ cursor: 'pointer' }} 
        >
          <ListItemAvatar>
            <Avatar className={`${colors[index % colors.length]} text-white`}>
              {item.name[0]}
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={item.name} secondary={item.email} />
          <IconButton edge="end" aria-label="email" onClick={() => window.location.href = `mailto:${item.email}`}>
            <EmailIcon className="text-indigo-500" />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
};

export default UserList;
