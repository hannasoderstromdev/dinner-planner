import ArrayUtils from '../Array'

describe('Utils/Array', () => {
  describe('ArrayUtils.insertionSort', () => {
    it('sorts', () => {
      const arrUnsorted = [
        { id: 'id01', name: 'Crime' },
        { id: 'id02', name: 'Drama' },
        { id: 'id03', name: 'Fantasy' },
        { id: 'id04', name: 'Mystery' },
        { id: 'id05', name: 'Action' },
        { id: 'id06', name: 'Adventure' },
        { id: 'id07', name: 'Sci-fi' },
      ]

      const expected = [
        { id: 'id05', name: 'Action' },
        { id: 'id06', name: 'Adventure' },
        { id: 'id01', name: 'Crime' },
        { id: 'id02', name: 'Drama' },
        { id: 'id03', name: 'Fantasy' },
        { id: 'id04', name: 'Mystery' },
        { id: 'id07', name: 'Sci-fi' },
      ]

      expect(ArrayUtils.insertionSort(arrUnsorted, 'name')).toEqual(expected)
    })
  })

  describe('ArrayUtils.chunk', () => {
    it('returns chunks', () => {
      const arr = [
        { thing: 'Thing One' },
        { thing: 'Thing Two' },
        { thing: 'Thing Three' },
        { thing: 'Thing Four' },
        { thing: 'Thing Five' },
        { thing: 'Thing Six' },
      ]
      const size = 2

      const expected = [
        [{ thing: 'Thing One' }, { thing: 'Thing Two' }],
        [{ thing: 'Thing Three' }, { thing: 'Thing Four' }],
        [{ thing: 'Thing Five' }, { thing: 'Thing Six' }],
      ]

      expect(ArrayUtils.chunk(arr, size)).toEqual(expected)
    })
  })

  describe('ArrayUtils.groupBy', () => {
    it('returns Objects grouped by key', () => {
      const arr = [
        { name: 'Hanna', another: 'Another 1' },
        { name: 'Hanna', another: 'Another 2' },
        { name: 'Xena', another: 'Another 3' },
        { name: 'Zeus', another: 'Another 3' },
      ]
      const key = 'name'

      const expected = {
        Hanna: [
          { another: 'Another 1', name: 'Hanna' },
          { another: 'Another 2', name: 'Hanna' },
        ],
        Xena: [{ another: 'Another 3', name: 'Xena' }],
        Zeus: [{ another: 'Another 3', name: 'Zeus' }],
      }

      expect(ArrayUtils.groupBy(arr, key)).toEqual(expected)
    })
  })

  describe('ArrayUtils.arrayContainsObject', () => {
    const arr = [
      { name: 'Hanna', pet: { name: 'Xena' } },
      { name: 'Issy', pet: { name: 'Xena' } },
      { name: 'Micke', pet: { name: 'Zeus' } },
    ]
    const object = { name: 'Hanna', pet: { name: 'Xena' } }
    const object2 = {
      name: 'Linus',
      pet: { name: 'Stefan' },
    }

    it('returns index if object exists', () => {
      expect(ArrayUtils.arrayContainsObject(arr, object)).toEqual(0)
    })

    it("returns -1 if object doesn't exist", () => {
      expect(ArrayUtils.arrayContainsObject(arr, object2)).toEqual(-1)
    })
  })

  describe('ArrayUtils.arrayContainsObjectKey', () => {
    it('returns index if object with key exists', () => {
      const arr = [
        { person: { name: 'Hanna' } },
        { pet: { name: 'Xena' } },
        { girlfriend: { name: 'Issy' } },
      ]

      const object = { pet: { name: 'Xena' } }
      const key = 'pet'

      expect(ArrayUtils.arrayContainsObjectKey(arr, object, key)).toEqual(1)
    })
  })

  describe('ArrayUtils.insertAtIndex', () => {
    it('inserts item at index', () => {
      const arr = ['Hanna', 'Issy', 'Xena']
      const index = 2
      const item = 'Zeus'

      const expected = ['Hanna', 'Issy', 'Zeus', 'Xena']

      expect(ArrayUtils.insertAtIndex(arr, index, item)).toEqual(expected)
    })
  })

  describe('ArrayUtils.insertAfterIndex', () => {
    it('inserts item after index', () => {
      const arr = ['Hanna', 'Issy', 'Xena']
      const index = 2
      const item = 'Zeus'

      const expected = ['Hanna', 'Issy', 'Xena', 'Zeus']

      expect(ArrayUtils.insertAfterIndex(arr, index, item)).toEqual(expected)
    })
  })

  describe('ArrayUtils.insertManyAfterIndex', () => {
    it('inserts items after index', () => {
      const arr = ['Hanna', 'Issy']
      const index = 1
      const item = ['Xena', 'Zeus']

      const expected = ['Hanna', 'Issy', 'Xena', 'Zeus']

      expect(ArrayUtils.insertManyAfterIndex(arr, index, item)).toEqual(
        expected,
      )
    })
  })

  describe('ArrayUtils.reorderArray', () => {
    it('reorders item to new index-position', () => {
      const arr = ['Hanna', 'Issy', 'Xena', 'Zeus']
      const oldIndex = 3
      const newIndex = 2

      const expected = ['Hanna', 'Issy', 'Zeus', 'Xena']

      expect(ArrayUtils.reorderArray(arr, oldIndex, newIndex)).toEqual(expected)
    })
  })
})
