---
title: neusomatic
description: 
Author: 
Last updated: 2021-10-25
type: article
---
## neusomatic
<br>Recipe source code: <https://github.com/rworkflow/RcwlRecipes/blob/master/Rcwl/pl_neusomatic.R>
## plot
![## neusomatic](/plots/neusomatic.svg)
## Inputs
|         |label |type   |description  |
|:--------|:-----|:------|:------------|
|tbam     |      |File   |  |
|nbam     |      |File   |  |
|ref      |      |File   |  |
|region   |      |File   |  |
|ensemble |      |File   |  |
|threads  |      |int    |  |
|ovcf     |      |string |  |
## Outputs
|       |label        |type |description  |
|:------|:------------|:----|:------------|
|outVcf |  |File |  |
## steps
|            |label        |doc          |
|:-----------|:------------|:------------|
|preprocess  |  |  |
|call        |  |  |
|postprocess |  |  |
