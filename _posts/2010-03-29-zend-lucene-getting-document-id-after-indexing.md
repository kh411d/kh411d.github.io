---
layout: post
title: Zend Lucene, getting document ID after indexing
date: '2010-03-29 12:43:41 +0700'
date_gmt: '2010-03-29 05:43:41 +0700'
categories:
- Internet &amp; Tech
tags: []
---
Once upon a time I have a problem how to get the ID of the indexed document, I need to delete  
 the document that was not available on the database, apparently the document unique ID cannot  
 be use or kept bcoz, it changed after optimization, so then,

the Indexed documents may have two type of id's, so I put database id on the document;

1. Internal document id returned by $hit->id and used by

 
    <pre lang="php">$index->getDocument(), $index->delete()

 and some other methods.

This id \_may\_ and \_will\_ be changed while index optimization (or  
 auto-optimization) and can't be used to refer indexed document.

This id also can't be used in search queries.

2. Some unique (or not unique) value added to document while indexing:  
 ...

 
    <pre lang="php">
    $doc->addField(Zend_Search_Lucene_Field::Keyword('DB_id', $dbId));


...

This field can be used for searching document:

 
    <pre lang="php">$hits = $index->find('DB_id:2');

or (better) directly retrieving documents:  
 ...

 
    <pre lang="php">
    $docIDs = $index->TermDocs(new Zend_Search_Lucene_Index_Term('2',
    'DB_id'));
    foreach ($docIDs as $docId) {
    $index->delete($docId);
    }