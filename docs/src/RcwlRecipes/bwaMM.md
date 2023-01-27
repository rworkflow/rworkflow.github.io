---
title: bwaMM
description: 
Author: 
Last updated: 2021-10-25
type: article
---
## bwaMM
<br>Recipe source code: <https://github.com/rworkflow/RcwlRecipes/blob/master/Rcwl/pl_bwaMM.R>
## plot
![## bwaMM](/plots/bwaMM.svg)
## Inputs
|        |label |type     |description  |
|:-------|:-----|:--------|:------------|
|outBam  |      |string   |  |
|RG      |      |string[] |  |
|threads |      |int      |  |
|Ref     |      |File     |  |
|FQ1s    |      |File[]   |  |
|FQ2s    |      |File[]   |  |
## Outputs
|         |label        |type |description  |
|:--------|:------------|:----|:------------|
|matrix   |  |File |  |
|Idx      |  |File |  |
|flagstat |  |File |  |
## steps
|            |label        |doc          |
|:-----------|:------------|:------------|
|bwaAlign    |  |  |
|mergeBamDup |  |  |
---
title: bwaMM
description: 
Author: 
Last updated: 2022-02-16
type: article
---
## bwaMM
<br>Recipe source code: <https://github.com/rworkflow/RcwlRecipes/blob/master/Rcwl/pl_bwaMM.R>
## plot
![## bwaMM](/plots/bwaMM.svg)
## Inputs
|        |label |type     |description  |
|:-------|:-----|:--------|:------------|
|outBam  |      |string   |  |
|RG      |      |string[] |  |
|threads |      |int      |  |
|Ref     |      |File     |  |
|FQ1s    |      |File[]   |  |
|FQ2s    |      |File[]   |  |
## Outputs
|         |label        |type |description  |
|:--------|:------------|:----|:------------|
|matrix   |  |File |  |
|Idx      |  |File |  |
|flagstat |  |File |  |
## steps
|            |label        |doc          |
|:-----------|:------------|:------------|
|bwaAlign    |  |  |
|mergeBamDup |  |  |
