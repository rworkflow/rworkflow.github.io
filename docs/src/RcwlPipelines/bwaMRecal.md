---
title: bwaMRecal
description: 
Author: 
Last updated: 2021-10-25
type: article
---
## bwaMRecal
<br>Recipe source code: <https://github.com/rworkflow/RcwlRecipes/blob/master/Rcwl/pl_bwaMRecal.R>
## plot
![## bwaMRecal](/plots/bwaMRecal.svg)
## Inputs
|          |label |type   |description  |
|:---------|:-----|:------|:------------|
|outBam    |      |string |  |
|RG        |      |string |  |
|threads   |      |int    |  |
|Ref       |      |File   |  |
|FQ1s      |      |File   |  |
|FQ2s      |      |File?  |  |
|knowSites |      |array  |  |
## Outputs
|         |label        |type |description  |
|:--------|:------------|:----|:------------|
|BAM      |  |File |  |
|matrix   |  |File |  |
|flagstat |  |File |  |
|stats    |  |File |  |
## steps
|          |label        |doc          |
|:---------|:------------|:------------|
|bwaAlign  |  |  |
|markdup   |  |  |
|BaseRecal |  |  |
