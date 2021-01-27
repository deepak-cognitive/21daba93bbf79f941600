import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';

const Details = () => {
  const data: any = useSelector((state: any) => state.posts)

  return (
    <>
      <View>
        <Text>{data}</Text>
      </View>
      </>
  )
}
export default Details;