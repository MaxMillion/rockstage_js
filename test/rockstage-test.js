buster.testCase('RockstageTest', {
  setUp: function() {
    localStorage.clear();
    sessionStorage.clear();
  },
  'put() should be equal storage.getItem()': function() {
    RS.put({foo: 'hoge', bar: 'fuga', baz: 'hogera'});

    assert.equals('hoge', JSON.parse(localStorage.getItem('foo')));
    assert.equals('fuga', JSON.parse(localStorage.getItem('bar')));
    assert.equals('hogera', JSON.parse(localStorage.getItem('baz')));
  },
  'get() should be equal storage.setItem()': function() {
    localStorage.setItem('foo', JSON.stringify('hoge'));

    assert.equals('hoge', RS.get('foo'));
  },
  'remove() should be clear storage': function()  {
    RS.put({foo: 'hoge', bar: 'fuga', baz: 'hogera'});
    RS.remove('foo');

    refute.isFalse(JSON.parse(localStorage.getItem('foo')));
  },
  'clear() sould be clear all storage': function() {
    RS.put({foo: 'hoge', bar: 'fuga', baz: 'hogera'});
    RS.clear();

    refute.isNull(localStorage);
  },
  'is() should be returned true in storage & should be returned false in no storage': function() {
    RS.put({foo: 'hoge', bar: 'fuga', baz: 'hogera'});

    assert.isTrue(RS.is('foo'));
    assert.isFalse(RS.is('storage'));
  }
});
