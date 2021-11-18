import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.metrics import silhouette_score
from sklearn.cluster import KMeans
from mpl_toolkits.mplot3d import Axes3D
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd

def cluster(df, col):
    data = pd.DataFrame()
    for j in col:
        data[j]=df[j]
    cluster_n =silhoutte(data)
    km = KMeans(n_clusters=cluster_n)
    clusters = km.fit_predict(data)
    df["label"] = clusters
    fig = plt.figure(figsize=(20,10))
    ax = fig.add_subplot(111, projection='3d')
    colors = ['blue','red','yellow','orange','green','purple']
    count = 0
    for i in range(cluster_n):
        ax.scatter(df[col[0]][df.label == i], df[col[1]][df.label == i], df[col[2]][df.label == i], c=colors[count], s=60)
        count+=1
    ax.view_init(30, 185)
    plt.xlabel(col[0])
    plt.ylabel(col[1])
    ax.set_zlabel(col[2])
    plt.show()

def silhoutte(data):
    km_silhouette = []
    for k in range(2,11):
        kmeans = KMeans(n_clusters=k, init="k-means++")
        kmeans.fit(data)
        preds = kmeans.predict(data)    
        silhouette = silhouette_score(data,preds)
        km_silhouette.append(silhouette)
    cluster_n = int(km_silhouette.index(max(km_silhouette)))+1
    return cluster_n

