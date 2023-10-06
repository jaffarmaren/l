import React, { useState, useEffect } from 'react'
import {
  View,
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import { useDispatch } from 'react-redux'
import { Brand } from '@/Components'
import { useTheme } from '@/Hooks'
import { useLazyFetchOneQuery } from '@/Services/modules/users'
import { useLazyGetPostsQuery, useLazyGetPostQuery, useEditPostMutation } from '@/Services/modules/posts'
import { changeTheme, ThemeState } from '@/Store/Theme'
import { getUser, editUser } from '@/Store/User'

const ExampleContainer = () => {
  const { Common, Fonts, Gutters, Layout } = useTheme()
  const dispatch = useDispatch()

  const [userId, setUserId] = useState('9')
  const [fetchOne, { data, isSuccess, isLoading, isFetching, error }] =
    useLazyFetchOneQuery()
    const [getPost] = useLazyGetPostQuery()

    const [ editPost ] = useEditPostMutation()
  
  const [ getPosts, {data: postData, isSuccess: isSuccessPost, isLoading: isLoadingPosts, isFetching: isFetchingPosts } ] = useLazyGetPostsQuery();

  useEffect(() => {
    fetchOne(userId);
    getPost('1');
    
  }, [fetchOne, userId])

  const onChangeTheme = ({ theme, darkMode }: Partial<ThemeState>) => {
    dispatch(changeTheme({ theme, darkMode }))
  }

  const onGetUser = () => {
    dispatch(getUser({id:'abcd'}));
  }

  const onPostEdit = () => {
    editPost({
      id: '1',
      userId: '2',
      title: 'title1',
      body: 'body1'
    })
  }

  return (
    <ScrollView
      style={[
        Layout.fill, 
        // Common.backgroundWhite
      ]}
      contentContainerStyle={[
        Layout.fill,
        Layout.colCenter,
        Gutters.smallHPadding,
      ]}
    >
      <View style={[[Layout.colCenter, Gutters.smallVPadding]]}>
        <Brand />
        <Text style={Fonts.textRegular}>
            welcome
        </Text>

        <Text style={Fonts.textRegular}>
          Hello world, to "React Native"
        </Text>

        <View style={[
          Layout.row, 
          Layout.justifyContentBetween, 
          Layout.selfStretch, 
          Gutters.smallVPadding, 
          Gutters.smallHPadding
        ]}>
          <TouchableOpacity onPress={onPostEdit} style={[
            // Common.backgroundPrimary, 
            Gutters.largeHPadding, 
            Gutters.smallVPadding
          ]}>
            <Text>Dark</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onGetUser} style={[
            // Common.backgroundPrimary, 
            Gutters.largeHPadding, 
            Gutters.smallVPadding
          ]}>
            <Text>Light</Text>
          </TouchableOpacity>
        </View>
        
      </View>
      
    </ScrollView>
  )
}

export default ExampleContainer
