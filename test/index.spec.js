import urlJoin from '../src';

it('should add leading slash and no trailing slash by default', () => {
    expect(urlJoin()).toBe('/');
    expect(urlJoin(undefined, 'foo')).toBe('/foo');
    expect(urlJoin('foo', null, 'bar')).toBe('/foo/bar');
    expect(urlJoin('foo', '', 'bar')).toBe('/foo/bar');
    expect(urlJoin('foo')).toBe('/foo');
    expect(urlJoin('/foo')).toBe('/foo');
    expect(urlJoin('/', '/foo')).toBe('/foo');
    expect(urlJoin('/', '//foo')).toBe('/foo');
    expect(urlJoin('/', '/foo//')).toBe('/foo');
    expect(urlJoin('/', '/foo/', '')).toBe('/foo');
    expect(urlJoin('/', '/foo/', '/')).toBe('/foo');
    expect(urlJoin('foo', 'bar')).toBe('/foo/bar');
    expect(urlJoin('/foo', 'bar')).toBe('/foo/bar');
    expect(urlJoin('/foo', '/bar')).toBe('/foo/bar');
    expect(urlJoin('/foo/', '/bar/')).toBe('/foo/bar');
    expect(urlJoin('/foo/', '/bar/baz')).toBe('/foo/bar/baz');
    expect(urlJoin('/foo/', '/bar//baz')).toBe('/foo/bar/baz');

    expect(urlJoin('http://google.com')).toBe('http://google.com');
    expect(urlJoin('http://google.com', '')).toBe('http://google.com');
    expect(urlJoin('http://google.com', 'foo')).toBe('http://google.com/foo');
    expect(urlJoin('http://google.com/', 'foo')).toBe('http://google.com/foo');
    expect(urlJoin('http://google.com/', '/foo')).toBe('http://google.com/foo');
    expect(urlJoin('http://google.com//', '/foo')).toBe('http://google.com/foo');
    expect(urlJoin('http://google.com/foo', 'bar')).toBe('http://google.com/foo/bar');

    expect(urlJoin('http://google.com', '?queryString')).toBe('http://google.com?queryString');
    expect(urlJoin('http://google.com', 'foo?queryString')).toBe('http://google.com/foo?queryString');
    expect(urlJoin('http://google.com', 'foo', '?queryString')).toBe('http://google.com/foo?queryString');
    expect(urlJoin('http://google.com', 'foo/', '?queryString')).toBe('http://google.com/foo?queryString');
    expect(urlJoin('http://google.com?queryString')).toBe('http://google.com?queryString');
});

it('should add leading slash and trailing slash', () => {
    const options = { trailingSlash: true };

    expect(urlJoin(options)).toBe('/');
    expect(urlJoin(undefined, 'foo', options)).toBe('/foo/');
    expect(urlJoin('foo', null, 'bar', options)).toBe('/foo/bar/');
    expect(urlJoin('foo', '', 'bar', options)).toBe('/foo/bar/');
    expect(urlJoin('foo', options)).toBe('/foo/');
    expect(urlJoin('/foo', options)).toBe('/foo/');
    expect(urlJoin('/', '/foo', options)).toBe('/foo/');
    expect(urlJoin('/', '//foo', options)).toBe('/foo/');
    expect(urlJoin('/', '/foo//', options)).toBe('/foo/');
    expect(urlJoin('/', '/foo/', '', options)).toBe('/foo/');
    expect(urlJoin('/', '/foo/', '/', options)).toBe('/foo/');
    expect(urlJoin('foo', 'bar', options)).toBe('/foo/bar/');
    expect(urlJoin('/foo', 'bar', options)).toBe('/foo/bar/');
    expect(urlJoin('/foo', '/bar', options)).toBe('/foo/bar/');
    expect(urlJoin('/foo/', '/bar/', options)).toBe('/foo/bar/');
    expect(urlJoin('/foo/', '/bar/baz', options)).toBe('/foo/bar/baz/');
    expect(urlJoin('/foo/', '/bar//baz', options)).toBe('/foo/bar/baz/');

    expect(urlJoin('http://google.com', options)).toBe('http://google.com/');
    expect(urlJoin('http://google.com', '', options)).toBe('http://google.com/');
    expect(urlJoin('http://google.com', 'foo', options)).toBe('http://google.com/foo/');
    expect(urlJoin('http://google.com/', 'foo', options)).toBe('http://google.com/foo/');
    expect(urlJoin('http://google.com/', '/foo', options)).toBe('http://google.com/foo/');
    expect(urlJoin('http://google.com//', '/foo', options)).toBe('http://google.com/foo/');
    expect(urlJoin('http://google.com/foo', 'bar', options)).toBe('http://google.com/foo/bar/');

    expect(urlJoin('http://google.com', '?queryString', options)).toBe('http://google.com/?queryString');
    expect(urlJoin('http://google.com', 'foo?queryString', options)).toBe('http://google.com/foo/?queryString');
    expect(urlJoin('http://google.com', 'foo', '?queryString', options)).toBe('http://google.com/foo/?queryString');
    expect(urlJoin('http://google.com', 'foo/', '?queryString', options)).toBe('http://google.com/foo/?queryString');
    expect(urlJoin('http://google.com?queryString', options)).toBe('http://google.com/?queryString');
});

it('should remove leading slash and add trailing slash', () => {
    const options = { leadingSlash: false, trailingSlash: true };

    expect(urlJoin(options)).toBe('/');
    expect(urlJoin(undefined, 'foo', options)).toBe('foo/');
    expect(urlJoin('foo', null, 'bar', options)).toBe('foo/bar/');
    expect(urlJoin('foo', '', 'bar', options)).toBe('foo/bar/');
    expect(urlJoin('foo', options)).toBe('foo/');
    expect(urlJoin('/foo', options)).toBe('foo/');
    expect(urlJoin('/', '/foo', options)).toBe('foo/');
    expect(urlJoin('/', '//foo', options)).toBe('foo/');
    expect(urlJoin('/', '/foo//', options)).toBe('foo/');
    expect(urlJoin('/', '/foo/', '', options)).toBe('foo/');
    expect(urlJoin('/', '/foo/', '/', options)).toBe('foo/');
    expect(urlJoin('foo', 'bar', options)).toBe('foo/bar/');
    expect(urlJoin('/foo', 'bar', options)).toBe('foo/bar/');
    expect(urlJoin('/foo', '/bar', options)).toBe('foo/bar/');
    expect(urlJoin('/foo/', '/bar/', options)).toBe('foo/bar/');
    expect(urlJoin('/foo/', '/bar/baz', options)).toBe('foo/bar/baz/');
    expect(urlJoin('/foo/', '/bar//baz', options)).toBe('foo/bar/baz/');

    expect(urlJoin('http://google.com', options)).toBe('http://google.com/');
    expect(urlJoin('http://google.com', '', options)).toBe('http://google.com/');
    expect(urlJoin('http://google.com', 'foo', options)).toBe('http://google.com/foo/');
    expect(urlJoin('http://google.com/', 'foo', options)).toBe('http://google.com/foo/');
    expect(urlJoin('http://google.com/', '/foo', options)).toBe('http://google.com/foo/');
    expect(urlJoin('http://google.com//', '/foo', options)).toBe('http://google.com/foo/');
    expect(urlJoin('http://google.com/foo', 'bar', options)).toBe('http://google.com/foo/bar/');

    expect(urlJoin('http://google.com', '?queryString', options)).toBe('http://google.com/?queryString');
    expect(urlJoin('http://google.com', 'foo?queryString', options)).toBe('http://google.com/foo/?queryString');
    expect(urlJoin('http://google.com', 'foo', '?queryString', options)).toBe('http://google.com/foo/?queryString');
    expect(urlJoin('http://google.com', 'foo/', '?queryString', options)).toBe('http://google.com/foo/?queryString');
    expect(urlJoin('http://google.com?queryString', options)).toBe('http://google.com/?queryString');
});

it('should remove leading slash and trailing slash', () => {
    const options = { leadingSlash: false, trailingSlash: false };

    expect(urlJoin(options)).toBe('');
    expect(urlJoin(undefined, 'foo', options)).toBe('foo');
    expect(urlJoin('foo', null, 'bar', options)).toBe('foo/bar');
    expect(urlJoin('foo', '', 'bar', options)).toBe('foo/bar');
    expect(urlJoin('foo', options)).toBe('foo');
    expect(urlJoin('/foo', options)).toBe('foo');
    expect(urlJoin('/', '/foo', options)).toBe('foo');
    expect(urlJoin('/', '//foo', options)).toBe('foo');
    expect(urlJoin('/', '/foo//', options)).toBe('foo');
    expect(urlJoin('/', '/foo/', '', options)).toBe('foo');
    expect(urlJoin('/', '/foo/', '/', options)).toBe('foo');
    expect(urlJoin('foo', 'bar', options)).toBe('foo/bar');
    expect(urlJoin('/foo', 'bar', options)).toBe('foo/bar');
    expect(urlJoin('/foo', '/bar', options)).toBe('foo/bar');
    expect(urlJoin('/foo/', '/bar/', options)).toBe('foo/bar');
    expect(urlJoin('/foo/', '/bar/baz', options)).toBe('foo/bar/baz');
    expect(urlJoin('/foo/', '/bar//baz', options)).toBe('foo/bar/baz');

    expect(urlJoin('http://google.com', options)).toBe('http://google.com');
    expect(urlJoin('http://google.com', '', options)).toBe('http://google.com');
    expect(urlJoin('http://google.com', 'foo', options)).toBe('http://google.com/foo');
    expect(urlJoin('http://google.com/', 'foo', options)).toBe('http://google.com/foo');
    expect(urlJoin('http://google.com/', '/foo', options)).toBe('http://google.com/foo');
    expect(urlJoin('http://google.com//', '/foo', options)).toBe('http://google.com/foo');
    expect(urlJoin('http://google.com/foo', 'bar', options)).toBe('http://google.com/foo/bar');

    expect(urlJoin('http://google.com', '?queryString', options)).toBe('http://google.com?queryString');
    expect(urlJoin('http://google.com', 'foo?queryString', options)).toBe('http://google.com/foo?queryString');
    expect(urlJoin('http://google.com', 'foo', '?queryString', options)).toBe('http://google.com/foo?queryString');
    expect(urlJoin('http://google.com', 'foo/', '?queryString', options)).toBe('http://google.com/foo?queryString');
    expect(urlJoin('http://google.com?queryString', options)).toBe('http://google.com?queryString');
});

it('should support URLs with relative protocol according to options.protocolRelative', () => {
    const options = { protocolRelative: true };

    expect(urlJoin('//google.com', 'foo', options)).toBe('//google.com/foo');
    expect(urlJoin('//google.com/', 'foo', options)).toBe('//google.com/foo');
    expect(urlJoin('//google.com/foo', 'bar', options)).toBe('//google.com/foo/bar');
    expect(urlJoin('//google.com/foo//', 'bar', options)).toBe('//google.com/foo/bar');

    options.protocolRelative = false;

    expect(urlJoin('//google.com', 'foo', options)).toBe('/google.com/foo');
    expect(urlJoin('//google.com/', 'foo', options)).toBe('/google.com/foo');
    expect(urlJoin('//google.com/foo', 'bar', options)).toBe('/google.com/foo/bar');
    expect(urlJoin('//google.com/foo//', 'bar', options)).toBe('/google.com/foo/bar');
});
