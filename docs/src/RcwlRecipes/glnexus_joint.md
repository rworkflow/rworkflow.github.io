---
title: glnexus joint
description: 
Author: 
Last updated: 2022-06-16
type: article
---
## glnexus_joint
<br>Recipe source code: <https://github.com/rworkflow/RcwlRecipes/blob/master/Rcwl/pl_glnexus_joint.R>
## plot
![## glnexus_joint](/plots/glnexus_joint.svg)
## Inputs
|        |label |type   |description  |
|:-------|:-----|:------|:------------|
|config  |      |string |  |
|bed     |      |File?  |  |
|gvcfs   |      |File[] |  |
|ovcf    |      |string |  |
|threads |      |int    |  |
## Outputs
|       |label        |type |description  |
|:------|:------------|:----|:------------|
|outVcf |  |File |  |
## steps
|        |label        |doc          |
|:-------|:------------|:------------|
|glnexus |  |  |
|bcf     |  |  |
