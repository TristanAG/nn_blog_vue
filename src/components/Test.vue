<template>
  <div class="test">
    <ul v-for="post in posts">
      <li>
        <h2>{{post.title}}</h2>
        <div class="post-content" v-html="post.body"></div>
        <hr />
      </li>
    </ul>
    <!-- <h1>Post(s)</h1>
      <hr />
    <h2>{{ post.title }}</h2>
    <div v-html="post.body"></div> -->
  </div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      posts: [
        {
          title: 'post1',
          body:
          `
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur nisl sit amet ligula accumsan commodo. Duis in libero eu tortor sollicitudin viverra sed vel lorem. Cras sed lorem in diam elementum pellentesque eget id arcu. Nunc in erat ac mauris posuere dignissim a et tellus. Maecenas eu urna vel massa varius dapibus at sit amet nisl. Aenean facilisis nisl felis, commodo molestie velit dapibus feugiat. Maecenas quis augue vitae mi dapibus semper eget ut orci. Sed condimentum urna eu convallis fringilla. In vitae ex scelerisque ante bibendum mattis. Praesent metus quam, lobortis eget neque non, suscipit gravida lorem. Vestibulum auctor lobortis dolor at placerat. Morbi non turpis vitae est consectetur ultrices. Cras nunc lacus, facilisis eu tristique sed, gravida ut tellus. Ut diam turpis, ullamcorper ut justo in, mollis pulvinar orci. Aliquam urna nulla, tristique vitae eros ac, accumsan cursus mi. Donec odio mi, egestas in ullamcorper at, semper quis lectus.
            </p>
            <p>
            Aenean vehicula commodo arcu nec molestie. Aenean mi nulla, cursus eu mattis ut, convallis et dui. Morbi et quam quis felis vehicula tristique. Donec efficitur luctus augue. Vivamus fringilla rutrum urna vel imperdiet. Integer magna augue, efficitur vel massa ut, posuere euismod nisi. Curabitur laoreet dolor arcu, at tempus nisl tincidunt vitae. Vestibulum pretium lacus turpis, vitae commodo orci consequat in. Proin lobortis auctor arcu, at elementum nulla placerat eget. Nam eget mauris sapien. Nam pharetra orci eu tempus pellentesque. Vestibulum hendrerit diam vel enim ultricies, at consequat libero posuere. Quisque vitae ipsum elementum, congue tellus non, posuere erat. Nunc vitae sem aliquet, tempus massa ac, dignissim nulla.
            Ut euismod nisi commodo libero dictum accumsan. Curabitur dictum velit a leo porttitor sollicitudin. Nam non blandit nisl. In hac habitasse platea dictumst. Morbi sed ultricies urna, id iaculis felis. Aliquam egestas libero vitae ante interdum posuere. Integer ipsum erat, faucibus a tempor in, porta at urna. Pellentesque vitae euismod sapien, eget cursus urna. Pellentesque pretium tortor ac odio euismod rhoncus. Vestibulum ut leo accumsan, egestas orci sit amet, sollicitudin ante. Pellentesque pharetra tellus vel dolor aliquet, in sodales diam volutpat.
            </p>
            <p>
            Vestibulum ut turpis massa. Aliquam erat volutpat. Nulla ut sollicitudin tellus, quis efficitur libero. Pellentesque nec turpis nulla. Nam pharetra gravida fringilla. Nulla suscipit turpis eu imperdiet commodo. Sed urna sem, ornare ut diam at, placerat porttitor velit. Praesent congue finibus gravida. Nunc neque elit, commodo nec mauris in, consequat blandit enim.
            </p>
            <p>
            Praesent lectus ex, dictum sit amet sem ut, hendrerit feugiat est. Nulla laoreet tempus aliquet. Integer ullamcorper, nunc nec placerat hendrerit, risus justo lobortis magna, nec viverra magna orci vitae lacus. Phasellus varius elementum enim, interdum sagittis odio vestibulum a. Ut consequat ante augue, nec feugiat arcu accumsan vel. Nunc vel dictum risus. In sit amet convallis diam. Sed gravida turpis tellus, ut scelerisque turpis pellentesque a. Nulla sit amet sem pellentesque, vestibulum ipsum id, lacinia nisl. Etiam sed laoreet dui.
            </p>
          `
        },
        {
          title: 'post2',
          body:
          `
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur nisl sit amet ligula accumsan commodo. Duis in libero eu tortor sollicitudin viverra sed vel lorem. Cras sed lorem in diam elementum pellentesque eget id arcu. Nunc in erat ac mauris posuere dignissim a et tellus. Maecenas eu urna vel massa varius dapibus at sit amet nisl. Aenean facilisis nisl felis, commodo molestie velit dapibus feugiat. Maecenas quis augue vitae mi dapibus semper eget ut orci. Sed condimentum urna eu convallis fringilla. In vitae ex scelerisque ante bibendum mattis. Praesent metus quam, lobortis eget neque non, suscipit gravida lorem. Vestibulum auctor lobortis dolor at placerat. Morbi non turpis vitae est consectetur ultrices. Cras nunc lacus, facilisis eu tristique sed, gravida ut tellus. Ut diam turpis, ullamcorper ut justo in, mollis pulvinar orci. Aliquam urna nulla, tristique vitae eros ac, accumsan cursus mi. Donec odio mi, egestas in ullamcorper at, semper quis lectus.
            </p>
            <p>
            Aenean vehicula commodo arcu nec molestie. Aenean mi nulla, cursus eu mattis ut, convallis et dui. Morbi et quam quis felis vehicula tristique. Donec efficitur luctus augue. Vivamus fringilla rutrum urna vel imperdiet. Integer magna augue, efficitur vel massa ut, posuere euismod nisi. Curabitur laoreet dolor arcu, at tempus nisl tincidunt vitae. Vestibulum pretium lacus turpis, vitae commodo orci consequat in. Proin lobortis auctor arcu, at elementum nulla placerat eget. Nam eget mauris sapien. Nam pharetra orci eu tempus pellentesque. Vestibulum hendrerit diam vel enim ultricies, at consequat libero posuere. Quisque vitae ipsum elementum, congue tellus non, posuere erat. Nunc vitae sem aliquet, tempus massa ac, dignissim nulla.
            Ut euismod nisi commodo libero dictum accumsan. Curabitur dictum velit a leo porttitor sollicitudin. Nam non blandit nisl. In hac habitasse platea dictumst. Morbi sed ultricies urna, id iaculis felis. Aliquam egestas libero vitae ante interdum posuere. Integer ipsum erat, faucibus a tempor in, porta at urna. Pellentesque vitae euismod sapien, eget cursus urna. Pellentesque pretium tortor ac odio euismod rhoncus. Vestibulum ut leo accumsan, egestas orci sit amet, sollicitudin ante. Pellentesque pharetra tellus vel dolor aliquet, in sodales diam volutpat.
            </p>
            <p>
            Vestibulum ut turpis massa. Aliquam erat volutpat. Nulla ut sollicitudin tellus, quis efficitur libero. Pellentesque nec turpis nulla. Nam pharetra gravida fringilla. Nulla suscipit turpis eu imperdiet commodo. Sed urna sem, ornare ut diam at, placerat porttitor velit. Praesent congue finibus gravida. Nunc neque elit, commodo nec mauris in, consequat blandit enim.
            </p>
            <p>
            Praesent lectus ex, dictum sit amet sem ut, hendrerit feugiat est. Nulla laoreet tempus aliquet. Integer ullamcorper, nunc nec placerat hendrerit, risus justo lobortis magna, nec viverra magna orci vitae lacus. Phasellus varius elementum enim, interdum sagittis odio vestibulum a. Ut consequat ante augue, nec feugiat arcu accumsan vel. Nunc vel dictum risus. In sit amet convallis diam. Sed gravida turpis tellus, ut scelerisque turpis pellentesque a. Nulla sit amet sem pellentesque, vestibulum ipsum id, lacinia nisl. Etiam sed laoreet dui.
            </p>
          `
        },
        {
          title: 'post3',
          body:
          `
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur nisl sit amet ligula accumsan commodo. Duis in libero eu tortor sollicitudin viverra sed vel lorem. Cras sed lorem in diam elementum pellentesque eget id arcu. Nunc in erat ac mauris posuere dignissim a et tellus. Maecenas eu urna vel massa varius dapibus at sit amet nisl. Aenean facilisis nisl felis, commodo molestie velit dapibus feugiat. Maecenas quis augue vitae mi dapibus semper eget ut orci. Sed condimentum urna eu convallis fringilla. In vitae ex scelerisque ante bibendum mattis. Praesent metus quam, lobortis eget neque non, suscipit gravida lorem. Vestibulum auctor lobortis dolor at placerat. Morbi non turpis vitae est consectetur ultrices. Cras nunc lacus, facilisis eu tristique sed, gravida ut tellus. Ut diam turpis, ullamcorper ut justo in, mollis pulvinar orci. Aliquam urna nulla, tristique vitae eros ac, accumsan cursus mi. Donec odio mi, egestas in ullamcorper at, semper quis lectus.
            </p>
            <p>
            Aenean vehicula commodo arcu nec molestie. Aenean mi nulla, cursus eu mattis ut, convallis et dui. Morbi et quam quis felis vehicula tristique. Donec efficitur luctus augue. Vivamus fringilla rutrum urna vel imperdiet. Integer magna augue, efficitur vel massa ut, posuere euismod nisi. Curabitur laoreet dolor arcu, at tempus nisl tincidunt vitae. Vestibulum pretium lacus turpis, vitae commodo orci consequat in. Proin lobortis auctor arcu, at elementum nulla placerat eget. Nam eget mauris sapien. Nam pharetra orci eu tempus pellentesque. Vestibulum hendrerit diam vel enim ultricies, at consequat libero posuere. Quisque vitae ipsum elementum, congue tellus non, posuere erat. Nunc vitae sem aliquet, tempus massa ac, dignissim nulla.
            Ut euismod nisi commodo libero dictum accumsan. Curabitur dictum velit a leo porttitor sollicitudin. Nam non blandit nisl. In hac habitasse platea dictumst. Morbi sed ultricies urna, id iaculis felis. Aliquam egestas libero vitae ante interdum posuere. Integer ipsum erat, faucibus a tempor in, porta at urna. Pellentesque vitae euismod sapien, eget cursus urna. Pellentesque pretium tortor ac odio euismod rhoncus. Vestibulum ut leo accumsan, egestas orci sit amet, sollicitudin ante. Pellentesque pharetra tellus vel dolor aliquet, in sodales diam volutpat.
            </p>
            <p>
            Vestibulum ut turpis massa. Aliquam erat volutpat. Nulla ut sollicitudin tellus, quis efficitur libero. Pellentesque nec turpis nulla. Nam pharetra gravida fringilla. Nulla suscipit turpis eu imperdiet commodo. Sed urna sem, ornare ut diam at, placerat porttitor velit. Praesent congue finibus gravida. Nunc neque elit, commodo nec mauris in, consequat blandit enim.
            </p>
            <p>
            Praesent lectus ex, dictum sit amet sem ut, hendrerit feugiat est. Nulla laoreet tempus aliquet. Integer ullamcorper, nunc nec placerat hendrerit, risus justo lobortis magna, nec viverra magna orci vitae lacus. Phasellus varius elementum enim, interdum sagittis odio vestibulum a. Ut consequat ante augue, nec feugiat arcu accumsan vel. Nunc vel dictum risus. In sit amet convallis diam. Sed gravida turpis tellus, ut scelerisque turpis pellentesque a. Nulla sit amet sem pellentesque, vestibulum ipsum id, lacinia nisl. Etiam sed laoreet dui.
            </p>
          `
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.post{

}
h1, h2 {
  font-weight: normal;
  margin-bottom: 4px;
  margin-top: -8px;
}
hr{
  margin-top: 32px;

}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}
.post-content{
  margin-top: 0px;
}
a {
  color: #42b983;
}
</style>
