import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, ScrollView } from 'react-native';
import { connect, useSelector } from 'react-redux';
import { getPosts } from '../redux/actions';
type Props = {
  getPosts: Function,
  posts: any,
}
const Posts = ({getPosts, posts} : Props) => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const data: any = useSelector((state: any) => state.posts)
  // console.log("posts page", data);

  useEffect(() => {
    const interval = setInterval(async () => {
      getNewPosts(page)
      setPage(page + 1);
    }, 10000)
    return () => {
      clearInterval(interval)
    }
  })

  const getNewPosts = (pageNum: number) => {
    setLoading(true)
    getPosts(pageNum);
    setLoading(false)
  }
  const onScroll = () => {
    setPage(page + 1)
    getNewPosts(page)
  }
  const itemData = (item: any) => {
    const data = item.item;
    console.log("item data=>", data)
    return (
      <ScrollView>
        <table>
          <th>
            <td>Page</td>
            <td>Title</td>
            <td>URL</td>
            <td>Author</td>
          </th>
          <tr>
          <td>{page}</td>
          <td>{data.title}</td>
          <td>{data.url}</td>
          <td>{ data.author }</td>
          </tr>
        </table>
     </ScrollView>
    )
  }
  return (
    <>
      <FlatList
        data={data}
        keyExtractor={(item: any, index: any) => item.objectID}
        renderItem={itemData}
        onEndReached={onScroll}
        onEndReachedThreshold={10}
      />
      {loading && <ActivityIndicator size="large" color = "blue" />}
    </>
  )
}

export default connect(null, {getPosts})(Posts);