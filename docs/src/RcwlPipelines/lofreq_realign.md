---
title: lofreq realign
description: 
Author: 
Last updated: 2022-02-16
type: article
---
## lofreq_realign
<br>Recipe source code: <https://github.com/rworkflow/RcwlRecipes/blob/master/Rcwl/pl_lofreq_realign.R>
## plot
![## lofreq_realign](/plots/lofreq_realign.svg)
## Inputs
|    |label |type |description  |
|:---|:-----|:----|:------------|
|ref |      |File |  |
|bam |      |File |  |
## Outputs
|     |label        |type |description  |
|:----|:------------|:----|:------------|
|ibam |  |File |  |
## steps
|        |label        |doc          |
|:-------|:------------|:------------|
|realign |  |  |
|sortBam |  |  |
|indelq  |  |  |
|bamIdx  |  |  |
