---
title: BaseRecal
description: 
Author: 
Last updated: 2021-10-25
type: article
---
## BaseRecal
<br>Recipe source code: <https://github.com/rworkflow/RcwlRecipes/blob/master/Rcwl/pl_BaseRecal.R>
## plot
![## BaseRecal](/plots/BaseRecal.svg)
## Inputs
|          |label |type   |description  |
|:---------|:-----|:------|:------------|
|bam       |      |File   |  |
|ref       |      |File   |  |
|knowSites |      |array  |  |
|oBam      |      |string |  |
## Outputs
|         |label        |type |description  |
|:--------|:------------|:----|:------------|
|rcBam    |  |File |  |
|flagstat |  |File |  |
|stats    |  |File |  |
## steps
|                  |label        |doc          |
|:-----------------|:------------|:------------|
|BaseRecalibrator  |  |  |
|ApplyBQSR         |  |  |
|samtools_index    |  |  |
|samtools_flagstat |  |  |
|samtools_stats    |  |  |
