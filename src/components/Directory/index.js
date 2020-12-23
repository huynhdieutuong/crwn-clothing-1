import React from 'react';
import { useSelector } from 'react-redux';
import MenuItem from '../MenuItem';
import { DirectoryContainer } from './styles';

const Directory = () => {
  const directorySections = useSelector((state) => state.directory.sections);
  return (
    <DirectoryContainer>
      {directorySections.map((directory) => (
        <MenuItem key={directory.id} directory={directory} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
