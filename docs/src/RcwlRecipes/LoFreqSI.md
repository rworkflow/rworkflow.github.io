---
title: LoFreqSI
description: 
Author: 
Last updated: 2021-10-25
type: article
---
## LoFreqSI
<br>Recipe source code: <https://github.com/rworkflow/RcwlRecipes/blob/master/Rcwl/pl_LoFreqSI.R>
## plot
![## LoFreqSI](/plots/LoFreqSI.svg)
## Inputs
|        |label |type   |description  |
|:-------|:-----|:------|:------------|
|tbam    |      |File   |  |
|nbam    |      |File   |  |
|ref     |      |File   |  |
|region  |      |File   |  |
|dbsnp   |      |File   |  |
|out     |      |string |  |
|threads |      |int    |  |
## Outputs
|        |label        |type |description  |
|:-------|:------------|:----|:------------|
|snp     |  |File |  |
|snpdb   |  |File |  |
|indel   |  |File |  |
|indeldb |  |File |  |
## steps
|           |label        |doc          |
|:----------|:------------|:------------|
|tbamR      |  |  |
|nbamR      |  |  |
|lofreqCall |  |  |
