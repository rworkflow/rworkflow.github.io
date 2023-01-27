---
title: SUPPA
description: 
Author: 
Last updated: 2021-10-25
type: article
---
## SUPPA
<br>Recipe source code: <https://github.com/rworkflow/RcwlRecipes/blob/master/Rcwl/pl_SUPPA.R>
## plot
![## SUPPA](/plots/SUPPA.svg)
## Inputs
|        |label |type   |description  |
|:-------|:-----|:------|:------------|
|quant   |      |File[] |  |
|qcolumn |      |string |  |
|qcnames |      |string |  |
|gtf     |      |File   |  |
|group1  |      |string |  |
|group2  |      |string |  |
|method  |      |string |  |
## Outputs
|    |label        |type   |description  |
|:---|:------------|:------|:------------|
|res |  |File[] |  |
## steps
|              |label        |doc          |
|:-------------|:------------|:------------|
|quantMerge    |  |  |
|genEvents     |  |  |
|mergeEvents   |  |  |
|psiPerEvent   |  |  |
|splitEventsG1 |  |  |
|splitEventsG2 |  |  |
|splitExpG1    |  |  |
|splitExpG2    |  |  |
|diffSplice    |  |  |
