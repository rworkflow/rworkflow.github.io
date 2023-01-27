---
title: phaseVcf
description: 
Author: 
Last updated: 2021-10-25
type: article
---
## phaseVcf
<br>Recipe source code: <https://github.com/rworkflow/RcwlRecipes/blob/master/Rcwl/pl_phaseVcf.R>
## plot
![## phaseVcf](/plots/phaseVcf.svg)
## Inputs
|         |label |type   |description  |
|:--------|:-----|:------|:------------|
|gvariant |      |File   |  |
|svariant |      |File   |  |
|ref      |      |File   |  |
|bam      |      |File   |  |
|outvcf   |      |string |  |
|nsample  |      |string |  |
|tsample  |      |string |  |
## Outputs
|     |label        |type |description  |
|:----|:------------|:----|:------------|
|pvcf |  |File |  |
## steps
|                  |label        |doc          |
|:-----------------|:------------|:------------|
|splitSample       |  |  |
|renameGVcf        |  |  |
|renameSVcf        |  |  |
|combineVariants   |  |  |
|sortVcf           |  |  |
|ReadBackedPhasing |  |  |
|bgzip             |  |  |
|tabixIndex        |  |  |
