function anchorize(text){
  const result = text.split(' ').map(x=> {
    if(/[http:|https:|ftp:|ftps:|file:|smb:]/.test(x)) {
      return `<a href="${x}">${x}</a>`
    } 
    return x
  })
  return result.join(' ')
  }

  console.log('<xmp>'+anchorize('hello http://world.com !')+'</xmp>')
  // '<xmp>hello <a href="http://world.com">http://world.com</a> !</xmp>'

  console.log('<xmp>'+anchorize('Hello FTP://World.com')+'</xmp>')
  // '<xmp>Hello <a href="FTP://World.com">FTP://World.com</a></xmp>'