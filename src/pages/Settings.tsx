// src/pages/SettingsPage.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useClerk } from "@clerk/clerk-react";
import {
    Button
} from "@/components/ui/button";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from '@/components/ui/dialog'

export default function SettingsPage() {
    const [open, setOpen] = useState(false);
    const { signOut } = useClerk();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await signOut();
        navigate("/sign-in");
    };

    return (
        <section className="max-w-2xl mx-auto px-4 py-10 space-y-6">
            <h1 className="text-2xl font-bold">⚙️ Settings</h1>

            <div className="rounded border bg-muted p-6 space-y-4">
                <h2 className="text-lg font-semibold">Account</h2>
                <p className="text-muted-foreground text-sm">
                    Manage your session and preferences.
                </p>

                <Dialog open={open} onOpenChange={setOpen}>
                    <DialogTrigger asChild>
                        <Button variant="destructive">Log Out</Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Confirm Logout</DialogTitle>
                        </DialogHeader>
                        <p className="text-sm text-muted-foreground">
                            Are you sure you want to log out of your account?
                        </p>
                        <DialogFooter className="mt-4">
                            <Button variant="outline" onClick={() => setOpen(false)}>
                                Cancel
                            </Button>
                            <Button variant="destructive" onClick={handleLogout}>
                                Yes, Log Out
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
        </section>
    );
}
