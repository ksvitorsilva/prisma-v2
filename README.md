# prisma-v2

## Client

```bash
# [link](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client)
# Generate prisma client
npx prisma generate
```

## Introspection

```bash
# [link](https://www.prisma.io/docs/reference/tools-and-interfaces/introspection)
# Generate schema from existing database
npx prisma introspect --force
```

## Studio

```bash
# Open prisma studio
npx prisma studio --experimental
```

## Migrations

```bash
# generate migration
npx prisma migrate save --experimental
# push migration to database
npx prisma migrate up --experimental
```

## Envs

```bash
DATABASE_URL
```
