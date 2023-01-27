---
title: delly somatic
description: 
Author: 
Last updated: 2021-10-25
type: article
---
## delly_somatic
<br>Recipe source code: <https://github.com/rworkflow/RcwlRecipes/blob/master/Rcwl/pl_delly_somatic.R>
## plot
![## delly_somatic](/plots/delly_somatic.svg)
## Inputs
|        |label |type   |description  |
|:-------|:-----|:------|:------------|
|tbam    |      |File   |  |
|nbam    |      |File   |  |
|outbcf  |      |string |  |
|exclude |      |File?  |  |
|genome  |      |File   |  |
## Outputs
|    |label        |type |description  |
|:---|:------------|:----|:------------|
|bcf |  |File |  |
## steps
|            |label        |doc          |
|:-----------|:------------|:------------|
|dellyCall   |  |  |
|listSample  |  |  |
|echo        |  |  |
|fpaste      |  |  |
|dellyFilter |  |  |
