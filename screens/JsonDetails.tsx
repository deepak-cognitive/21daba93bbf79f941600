import React from 'react';
import { ScrollView, Text } from 'react-native';
import { useSelector } from 'react-redux';

const Details = () => {
  const data: any = useSelector((state: any) => state.posts)

  return (   
    <ScrollView testID="details-wrapper" >
    <Text >
        {JSON.stringify(data, null, 10)}
    </Text>
    </ScrollView>

  )
}
export default Details;