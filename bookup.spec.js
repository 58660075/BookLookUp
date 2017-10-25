function booklookup(Brotest){
  this.Brotest = Brotest
  this.serach = (seraching) => {
    var alow = this.Brotest(seraching)
    return{
      bookname: alow.title,
      picture: alow.image,
      seraching: alow.seraching
    }
  }
}

test('Show Booklookup', ()=>{
  var book = {
    title: 'Goblin slayer 1',
    image: 'goblin.png',
    seraching: 'Bro389'
  }

  var sento = {
    bookname: 'Goblin slayer 1',
    picture: 'goblin.png',
    seraching: 'Bro389'
  }

  const amazonservice = jest.fn('Bro389').mockReturnValue(book)

  let app = new booklookup(amazonservice)
  let sent = app.serach('Bro389')

  expect(amazonservice).toHaveBeenCalled()
  expect(amazonservice).toHaveBeenCalledWith('Bro389')
  expect(book.title).toBe('Goblin slayer 1')
  expect(sent).toEqual(sento)
})
