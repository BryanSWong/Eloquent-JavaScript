/*

 A tricky subject in dependency management is circular dependencies, where module A depends
 on B, and B also depends on A. Many module systems simply forbid this. CommonJS modules allow
 a limited form: it works as long as the modules do not replace their default exports object with
 another value and start accessing each other’s interface only after they finish loading.

 Can you think of a way in which support for this feature could be implemented? Look back to the
 definition of require and consider what the function would have to do to allow this.

Hints:
 The trick is to add the exports object created for a module to require's cache before actually
 running the module. This means the module will not yet have had a chance to override module.exports,
 so we do not know whether it may want to export some other value. After loading, the cache object is
 overridden with module.exports, which may be a different value.

 But if in the course of loading the module, a second module is loaded that asks for the first module,
 its default exports object, which is likely still empty at this point, will be in the cache, and the
 second module will receive a reference to it. If it doesn’t try to do anything with the object until
 the first module has finished loading, things will work.

 */

hints say:

The trick is to add the exports object created for a module to require's cache before actually running ' +
'the module. This means the module will not yet have had a chance to override module.exports, so we do ' +
'not know whether it may want to export some other value. After loading, the cache object is overridden ' +
'with module.exports, which may be a different value.

But if in the course of loading the module, a second module is loaded that asks for the first module, its
default exports object, which is likely still empty at this point, will be in the cache, and the second module
will receive a reference to it. If it doesn’t try to do anything with the object until the first module has
finished loading, things will work.


