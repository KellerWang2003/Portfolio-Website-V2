import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"

const tokens = [
  { name: "background", className: "bg-background" },
  { name: "foreground", className: "bg-foreground" },
  { name: "primary", className: "bg-primary" },
  { name: "secondary", className: "bg-secondary" },
  { name: "muted", className: "bg-muted" },
  { name: "accent", className: "bg-accent" },
  { name: "destructive", className: "bg-destructive" },
  { name: "border", className: "bg-border" },
] as const

export default function Catalog() {
  return (
    <div className="mt-10 flex flex-col gap-10">
      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-medium">Tokens</h2>
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {tokens.map((token) => (
            <li key={token.name} className="flex items-center gap-3">
              <span
                className={`size-12 shrink-0 rounded-md border border-border ${token.className}`}
              />
              <span className="text-sm">{token.name}</span>
            </li>
          ))}
          <li className="flex items-center gap-3">
            <span className="size-12 shrink-0 border border-border bg-muted rounded-[var(--radius)]" />
            <span className="text-sm">radius</span>
          </li>
        </ul>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-medium">Components</h2>
        <p className="text-sm text-muted-foreground">
          Further components are added with{" "}
          <code>npx shadcn@latest add &lt;name&gt;</code> and a registry entry
          that imports that file. Until then they are not on the page.
        </p>
        <div className="flex flex-col gap-6">
          <article className="flex flex-col gap-3">
            <h3 className="text-sm font-medium">Button</h3>
            <Button>Button</Button>
          </article>
          <article className="flex flex-col gap-3">
            <h3 className="text-sm font-medium">Card</h3>
            <Card>
              <CardHeader>
                <CardTitle>Card</CardTitle>
                <CardDescription>Shared card</CardDescription>
              </CardHeader>
              <CardContent>Card content</CardContent>
            </Card>
          </article>
          <article className="flex flex-col gap-3">
            <h3 className="text-sm font-medium">Badge</h3>
            <Badge>Badge</Badge>
          </article>
          <article className="flex flex-col gap-3">
            <h3 className="text-sm font-medium">Separator</h3>
            <Separator />
          </article>
          <article className="flex flex-col gap-3">
            <h3 className="text-sm font-medium">Input</h3>
            <Input aria-label="Input" placeholder="Input" />
          </article>
          <article className="flex flex-col gap-3">
            <h3 className="text-sm font-medium">Textarea</h3>
            <Textarea aria-label="Textarea" placeholder="Textarea" />
          </article>
          <article className="flex flex-col gap-3">
            <h3 className="text-sm font-medium">Label</h3>
            <Label>Label</Label>
          </article>
        </div>
      </section>
    </div>
  )
}
