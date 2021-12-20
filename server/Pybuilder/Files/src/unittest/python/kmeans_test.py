from kmeans import silhoutte
import unittest
class silhoutteTest(unittest.TestCase):
    def test1(self):
        data1 = ("new.csv")
        self.assertEqual(silhoutte(data1),5)
    def test2(self):
        data2 = ("new2.csv")
        self.assertEqual(silhoutte(data2),1)
    def test3(self):
        data3 = ("new3.csv")
        self.assertEqual(silhoutte(data3),1)
    def test_split(self):
        s = 'hello world'
        self.assertEqual(s.split(), ['hello', 'world'])
        with self.assertRaises(TypeError):
            s.split(2)
    def test_strip(self):
        s = 'geeksforgeeks'
        self.assertEqual(s.strip('geek'), 'sforgeeks')

if __name__ == '__main__':
    unittest.main()