---
title: bwaAlign
description: align reads to reference genome
author: HQ
type: article
---

## align                                                                                                                                                                                                        
 align reads to reference genome
## plot
![Alt text](/plots/bwaAlign.svg)                                                                                                                                                                                                           
## Inputs                                                                                                                                                                                                         
 |        |label     |doc               |
 |:-------|:---------|:-----------------|
 |threads |threads   |number of threads |
 |RG      |readgroup |read groups       |
 |Ref     |reference |reference genome  |
 |FQ1     |read1     |read pair1        |
 |FQ2     |read2     |read pair2        |
## Outputs                                                                                                                                                                                                        
 |    |label        |doc          |
 |:---|:------------|:------------|
 |Bam |  |  |
 |Idx |  |  |
## steps                                                                                                                                                                                                          
 |        |label        |doc           |
 |:-------|:------------|:-------------|
 |bwa     |bwa          |bwa alignment |
 |sam2bam |  |   |
 |sortBam |  |   |
 |idxBam  |  |   |

